// Layouts
import PageLayout from '../components/layouts/page-layout';
import DashboardLayout from '../components/layouts/dashboard-layout';
// Public pages
import HomePage from '../pages/public-pages/home-page';
import ServicePage from '../pages/public-pages/service-page';
import ErrorPage from '../pages/public-pages/error-page';
// Visitor pages
import LoginPage from '../pages/visitor-pages/login-page';
import RegisterPage from '../pages/visitor-pages/register-page';
// Logged in pages
import ProfilePage from '../pages/logged-in-pages/profile-page';
// Admin pages
import ProductsPanelPage from '../pages/logged-in-pages/admin-pages/products-panel-pane';
import ProductFormPage from '../pages/logged-in-pages/admin-pages/product-form-page';

export default {
  // Layouts
  PageLayout,
  DashboardLayout,
  // Public pages
  HomePage,
  ServicePage,
  ErrorPage,
  // Visitor pages
  LoginPage,
  RegisterPage,
  // Logged in pages
  ProfilePage,
  // Admin pages
  ProductsPanelPage,
  ProductFormPage,
};
