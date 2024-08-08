import styles from '../../../app/styles/form.module.scss';
import { FieldErrors, useForm } from 'react-hook-form';
import { FC, memo, useCallback, useState } from 'react';
import Button from '../../../components/ui/button/Button.tsx';
import Text from '../../../shared/ui/text/Text.tsx';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormProps, FormValues } from '../types/types.ts';

export const Form: FC<FormProps> = memo(({ inputsData, link }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prevState) => !prevState);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      userName: '',
      email: '',
      password: '',
      termsOfUse: false,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className={styles.form}
    >
      {inputsData.map((item) => (
        <div key={item.name} className={styles.form__input}>
          {item.hasCheckbox ? (
            <div className={styles.form__checkbox}>
              <input
                {...register(item.name, { ...item.options })}
                type="checkbox"
              />
              <Text as={'span'} family={'inter'} size={14} weight={400}>
                {item.placeholder}
              </Text>
            </div>
          ) : (
            <>
              <input
                {...register(item.name, { ...item.options })}
                placeholder={item.placeholder}
                className={styles.form__input_item}
                type={
                  item.hasPasswordInput
                    ? isPasswordVisible
                      ? 'text'
                      : 'password'
                    : 'text'
                }
              />
              {item.hasPasswordInput && (
                <div
                  onClick={handlePasswordVisibility}
                  className={styles.form__password_icon}
                >
                  {isPasswordVisible ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </div>
              )}
            </>
          )}
          {errors[item.name as keyof FieldErrors<FormValues>]?.message && (
            <Text
              as={'p'}
              size={14}
              family={'inter'}
              className={styles.form__input_error}
            >
              {errors[item.name as keyof FieldErrors<FormValues>]?.message}
            </Text>
          )}
        </div>
      ))}
      <Button type="submit">{link}</Button>
    </form>
  );
});
