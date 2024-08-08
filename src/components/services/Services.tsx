import ServicesUI from '../ui/services/ServicesUI';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import ShieldIcon from '@mui/icons-material/Shield';
import HelpIcon from '@mui/icons-material/Help';
export const Services = () => {
  // Можно заменить на данные с сервера, с ссылкой на картинку.
  const servicesList = [
    {
      name: 'Free Shipping',
      description: 'Order above $200',
      icon: <LocalShippingIcon style={{ width: 48, height: 48 }} />,
    },
    {
      name: 'Money-back',
      description: '30 days guarantee',
      icon: <PaymentIcon style={{ width: 48, height: 48 }} />,
    },
    {
      name: 'Secure Payments',
      description: 'Secured by Stripe',
      icon: <ShieldIcon style={{ width: 48, height: 48 }} />,
    },
    {
      name: '24/7 Support',
      description: 'Phone and Email support',
      icon: <HelpIcon style={{ width: 48, height: 48 }} />,
    },
  ];

  return <ServicesUI services={servicesList} />;
};
