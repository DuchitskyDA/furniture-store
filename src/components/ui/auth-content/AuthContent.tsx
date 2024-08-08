import { FC } from 'react';
import styles from './auth-content.module.scss';
import Text from '../../../shared/ui/text/Text.tsx';
import { Form, InputData } from '../../../features';
import { Link } from 'react-router-dom';

interface AuthContentProps {
  title: string;
  description: string;
  link: {
    value: string;
    ref: string;
  };
  inputs: InputData[];
}
const AuthContent: FC<AuthContentProps> = ({
  title,
  description,
  link,
  inputs,
}) => {
  return (
    <div className={styles.content}>
      <Text as={'h2'} weight={500} size={40} height={44} spacing={'06'}>
        {title}
      </Text>
      <div className={styles.content__description}>
        <Text
          as={'span'}
          family={'inter'}
          size={16}
          weight={400}
          height={26}
          color={'grey'}
        >
          {description}
        </Text>
        <Link to={link.ref}>
          <Text
            as={'span'}
            family={'inter'}
            size={16}
            weight={600}
            height={26}
            color={'green'}
          >
            {link.value}
          </Text>
        </Link>
      </div>
      <Form link={title} inputsData={inputs} />
    </div>
  );
};

export default AuthContent;
