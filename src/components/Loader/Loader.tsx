import { RotatingTriangles } from 'react-loader-spinner';
import css from './Loader.module.css';

interface IProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: IProps) => {
  return (
    <>
      {isLoading && (
        <div className={css.overflow}>
          <RotatingTriangles
            visible={true}
            height='200'
            width='200'
            colors={['#000000', '#040404', '#000000']}
            ariaLabel='rotating-triangels-loading'
            wrapperStyle={{}}
            wrapperClass='rotating-triangels-wrapper'
          />
        </div>
      )}
    </>
  );
};

export default Loader;
