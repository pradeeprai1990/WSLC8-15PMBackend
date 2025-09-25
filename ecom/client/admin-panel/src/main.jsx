import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/common/Layout'
import Home from './Home'
import AddColor from './components/pages/colors/AddColor'
import ViewColor from './components/pages/colors/ViewColor'
import AddCountry from './components/pages/country/AddCountry'
import ViewCountry from './components/pages/country/ViewCountry'
import NewsLetters from './components/pages/enquirys/NewsLetters'
import AddFaqs from './components/pages/faqs/AddFaqs'
import ViewFaqs from './components/pages/faqs/ViewFaqs'
import AddMeterial from './components/pages/materials/AddMeterial'
import ViewMaterial from './components/pages/materials/ViewMaterial'
import Orders from './components/pages/orders/Orders'
import AddCategory from './components/pages/parentCategory/AddCategory'
import ViewCategory from './components/pages/parentCategory/ViewCategory'
import AddProducts from './components/pages/products/AddProducts'
import ViewProducts from './components/pages/products/ViewProducts'
import AddSliders from './components/pages/sliders/AddSliders'
import ViewSliders from './components/pages/sliders/ViewSliders'
import AddSubCategory from './components/pages/subCategory/AddSubCategory'
import ViewSubCategory from './components/pages/subCategory/ViewSubCategory'
import AddSubSubCategory from './components/pages/subsubCategory/AddSubSubCategory'
import ViewSubSubCategory from './components/pages/subsubCategory/ViewSubSubCategory'
import AddTermsConditions from './components/pages/terms&conditions/AddTermsConditions'
import ViewTermsConditions from './components/pages/terms&conditions/ViewTermsConditions'
import AddTestimonials from './components/pages/testimonials/AddTestimonials'
import ViewTestimonials from './components/pages/testimonials/ViewTestimonials'
import ViewUsers from './components/pages/users/ViewUsers'
import AddWhyChoose from './components/pages/whychooseus/AddWhyChoose'
import ViewWhyChoose from './components/pages/whychooseus/ViewWhyChoose'
import AdminProfile from './components/pages/profile/AdminProfile'
import CompanyProfile from './components/pages/profile/CompanyProfile'
import ContactEnquiry from './components/pages/enquirys/ContactEnquiry'
import Login from './Login'

let rootElement = document.getElementById('root')

createRoot(rootElement).render(
  <BrowserRouter>
    <Routes >
      <Route element={<Layout />}>
        
        <Route path='/home' element={<Home/>} />

        <Route path='/addColor/' element={<AddColor />} />
        <Route path='/edit-color/:id' element={<AddColor />} />
        <Route path='/viewColor' element={<ViewColor />} />



        <Route path='/addCountry' element={<AddCountry />} />
        <Route path='/viewCountry' element={<ViewCountry />} />
        <Route path='/contactEnquiry' element={<ContactEnquiry />} />
        <Route path='/newsLetters' element={<NewsLetters />} />
        <Route path='/addFaqs' element={<AddFaqs />} />
        <Route path='/viewFaqs' element={<ViewFaqs />} />
        <Route path='/addMaterials' element={<AddMeterial />} />
        <Route path='/viewMaterials' element={<ViewMaterial />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/addCategory' element={<AddCategory />} />
        <Route path='/viewCategory' element={<ViewCategory />} />
        <Route path='/addProducts' element={<AddProducts />} />
        <Route path='/viewProducts' element={<ViewProducts />} />
        <Route path='/addSlider' element={<AddSliders />} />
        <Route path='/viewSlider' element={<ViewSliders />} />


        <Route path='/addSubCategory' element={<AddSubCategory />} />
        <Route path='/edit-subcategory/:id' element={<AddSubCategory />} />
        <Route path='/viewSubCategory' element={<ViewSubCategory />} />





        <Route path='/addsubsubCategory' element={<AddSubSubCategory />} />
        <Route path='/viewsubsubcategory' element={<ViewSubSubCategory />} />
        <Route path='/addterms' element={<AddTermsConditions />} />
        <Route path='/viewTerms' element={<ViewTermsConditions />} />
        <Route path='/addtestimonials' element={<AddTestimonials />} />
        <Route path='viewtestimonials' element={<ViewTestimonials />} />
        <Route path='/viewusers' element={<ViewUsers />} />
        <Route path='/addwhychoose' element={<AddWhyChoose />} />
        <Route path='/viewwhychoose' element={<ViewWhyChoose />} />
        <Route path='/adminprofile' element={<AdminProfile />} />
        <Route path='/companyprofile' element={<CompanyProfile />} />
      </Route>

      <Route path='/' element={<Login />} />
    </Routes>
  </BrowserRouter>
)
