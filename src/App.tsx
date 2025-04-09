import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Fase 1 - Autenticação e Perfil
import Home from './pages/index';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/auth/Profile';

// Fase 2 - Imóveis
import PropertyList from './pages/properties/PropertyList';
import PropertyForm from './pages/properties/PropertyForm';
import PropertyDetails from './pages/properties/PropertyDetails';

// Fase 3 - Leads
import LeadsList from './pages/leads/LeadsList';
import LeadForm from './pages/leads/LeadForm';
import LeadDetails from './pages/leads/LeadDetails';

// Fase 4 - Dashboard Analítico
import AnalyticsDashboard from './pages/analytics/AnalyticsDashboard';

// Fase 5 - Notificações
import Notifications from './pages/notifications/Notifications';

// Fase 6 - Checkout (MercadoPago)
import CheckoutPage from './pages/checkout/CheckoutPage';
import CheckoutSuccess from './pages/checkout/CheckoutSuccess';
import CheckoutFailure from './pages/checkout/CheckoutFailure';

// Fase 7 - Favoritos
import Favorites from './pages/favorites/Favorites';

// Fase 8 - Acesso limitado para não cadastrados
import LimitedAccessPage from './pages/public/LimitedAccessPage';

// Fase 9 - Integração com Google Maps em detalhes do imóvel (já incluso em PropertyDetails)

// Fase 10 - Acesso Admin
import AdminPanel from './pages/admin/AdminPanel';

// Fase 11 - Validações por tipo de usuário (já aplicadas nos formulários)

// Fase 12 - Cadastro completo com campos obrigatórios (já aplicados nos forms)

function App() {
  return (
    <Router>
      <Routes>
        {/* Fase 1 */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        {/* Fase 2 */}
        <Route path="/imoveis" element={<PropertyList />} />
        <Route path="/imoveis/novo" element={<PropertyForm />} />
        <Route path="/imoveis/:id" element={<PropertyDetails />} />

        {/* Fase 3 */}
        <Route path="/leads" element={<LeadsList />} />
        <Route path="/leads/novo" element={<LeadForm />} />
        <Route path="/leads/:id" element={<LeadDetails />} />

        {/* Fase 4 */}
        <Route path="/dashboard" element={<AnalyticsDashboard />} />

        {/* Fase 5 */}
        <Route path="/notificacoes" element={<Notifications />} />

        {/* Fase 6 */}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/sucesso" element={<CheckoutSuccess />} />
        <Route path="/checkout/erro" element={<CheckoutFailure />} />

        {/* Fase 7 */}
        <Route path="/favoritos" element={<Favorites />} />

        {/* Fase 8 */}
        <Route path="/acesso-limitado" element={<LimitedAccessPage />} />

        {/* Fase 10 */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;

