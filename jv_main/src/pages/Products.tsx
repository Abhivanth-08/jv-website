
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories, getFeaturedProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products.filter(p => !['EDM Parts', 'Wire EDM Consumables', 'Wire Filters'].includes(p.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
    
    if (category) {
      setFilteredProducts(products.filter(product => product.category === category));
    } else {
      // Show all products except EDM categories by default
      setFilteredProducts(products.filter(product => !['EDM Parts', 'Wire EDM Consumables', 'Wire Filters'].includes(product.category)));
    }
  }, [searchParams]);
  
  const handleCategoryChange = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
    setShowMobileFilters(false);
  };

  const recommendedProducts = getFeaturedProducts().slice(0, 4);
  
  // Check if current category should show images
  const shouldShowImages = selectedCategory && ['EDM Parts', 'Wire EDM Consumables', 'Wire Filters'].includes(selectedCategory);
  const isCategoryView = shouldShowImages;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-industrial-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">Our Products</h1>
            <p className="mt-2 text-blue-100 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.8)]">Browse our extensive range of industrial spare parts</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Category Selection Section */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Filter by Category</h2>
                <div className="md:hidden">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                  >
                    <Filter size={18} />
                    <span>Filters</span>
                  </Button>
                </div>
              </div>
              
              <div className={`md:block ${showMobileFilters ? 'block' : 'hidden'}`}>
                <div className="flex flex-wrap gap-3">
                  <button
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === null
                        ? 'bg-industrial-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleCategoryChange(null)}
                  >
                    All Products
                  </button>
                  
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-industrial-blue text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Product List Section */}
          <section className="mb-12">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {selectedCategory || 'All Products'}{' '}
                <span className="text-gray-500 font-normal">
                  ({filteredProducts.length} items)
                </span>
              </h2>
              
              <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-industrial-blue bg-white text-gray-700">
                <option>Sort by: Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
                <option>Name: Z to A</option>
              </select>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className={`${isCategoryView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'product-grid'}`}>
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    showImage={shouldShowImages}
                    categoryView={isCategoryView}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No products found in this category.</p>
              </div>
            )}
          </section>

          {/* Recommended Products Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recommended for You</h2>
              <p className="text-gray-600 text-center mb-8">Discover popular products that other customers love</p>
              <div className="product-grid">
                {recommendedProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    showImage={false}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
