import { ChangeEvent, MouseEvent } from 'react';

export type HandleOnInputChange = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  fieldName: FieldName
) => void;

export type HandleOnSubmit = (event: MouseEvent) => Promise<void>;

export enum FieldName {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password'
}
