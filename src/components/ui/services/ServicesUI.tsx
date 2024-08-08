import type { FC, ReactElement } from 'react';
import styles from './services.module.scss';
import Text from '../../../shared/ui/text/Text.tsx';

interface ServicesUIProps {
  services: {
    name: string;
    description: string;
    icon: ReactElement | string;
  }[];
}

const ServicesUI: FC<ServicesUIProps> = ({ services }) => {
  // TODO: Можно перенести в отдельный компонент сервис
  return (
    <section className={styles.container}>
      <div className={styles.services}>
        {services.map((item) => (
          <div className={styles.services__item} key={item.name}>
            <div className={styles.services__item_icon}>{item.icon}</div>
            <Text
              as={'h3'}
              size={14}
              weight={600}
              height={22}
              family={'inter'}
              align={'center'}
            >
              {item.name}
            </Text>
            <Text
              as={'p'}
              size={14}
              weight={400}
              height={22}
              family={'inter'}
              color={'grey'}
              align={'center'}
            >
              {item.description}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesUI;
