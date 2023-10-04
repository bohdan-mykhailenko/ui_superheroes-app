import { Superhero } from '@/types/Superhero';
import * as Yup from 'yup';

export const superheroValidationSchema = Yup.object<Partial<Superhero>>().shape(
  {
    // nickname: Yup.string().required('Nickname is required'),
    // real_name: Yup.string().required('Real Name is required'),
    // origin_description: Yup.string().required('Origin Description is required'),
    // superpowers: Yup.string().required('Superpowers is required'),
    // catch_phrase: Yup.string().required('Catch Phrase is required'),
    images: Yup.array().min(1, 'Please select at least one image'),
  },
);
