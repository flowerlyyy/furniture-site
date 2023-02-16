import { DiscountItem } from './components/DiscountItem/DiscountItem';
import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts';
import { FurnitureCollection } from './components/FurnitureCollection/FurnitureCollection';
import { LeatestBlog } from './components/LeatestBlog/LeatestBlog';
import { LeatestProducts } from './components/LeatestProducts/LeatestProducts';
import { NewsLetter } from './components/NewsLetter/NewsLetter';
import { ShopexOffer } from './components/ShopexOffer/ShopexOffer';
import { TopCategories } from './components/TopCategories/TopCategories';
import { TrendingProducts } from './components/TrendingProducts/TrendingProducts';
import { UniqueFeatures } from './components/UniqueFeatures/UniqueFeatures';
import './HomePage.scss';
export const HomePage=()=>{
    return(
<>
<FurnitureCollection/>
<FeaturedProducts/>
<LeatestProducts/>
<ShopexOffer/>
<UniqueFeatures/>
<TrendingProducts/>
<DiscountItem/>
<TopCategories/>
<NewsLetter/>
<LeatestBlog/>
</>
    );
};