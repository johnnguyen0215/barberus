import { ChangeEvent, MouseEvent } from 'react';

export type HandleOnInputChange = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  fieldName: FieldName
) => void;

export type HandleOnSubmit = (event: MouseEvent) => Promise<void>;

export type HandleOnSpecsChange = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

export enum FieldName {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password'
}
