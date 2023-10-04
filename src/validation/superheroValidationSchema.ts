import { Superhero } from '@/types/Superhero';
import * as Yup from 'yup';

export const superheroValidationSchema = Yup.object<Partial<Superhero>>().shape(
  {
    nickname: Yup.string().required('Nickname is required'),
    real_name: Yup.string().required('Real Name is required'),
    origin_description: Yup.string().required('Origin Description is required'),
    superpowers: Yup.string().required('Superpowers is required'),
    catch_phrase: Yup.string().required('Catch Phrase is required'),
    // images: Yup.mixed()
    //   .required('Images are required')
    //   .test('fileSize', 'File size is too large', (value) => {
    //     if (!value) return true;
    //     const maxSize = 5 * 1024 * 1024; // 5MB
    //     return value && value.length > 0 && value[0].size <= maxSize;
    //   }),
  },
);
