import { ObjectType } from '/#/index'

export interface FormItemType {
  title: string
  field: string
  type: FormItemTypes
  style?: string
  class?: string
  colspan?: number
  rowspan?: number
  align?: string
  titleWidth?: number
  colon?: boolean
  onChange?: (appKey: string) => void
  props?: ObjectType<any>
  rules?: any
}

export enum FormInputType {
  INPUT = 'input',
  SELECT = 'select',
  APPSELECT = 'app-select',
  GROUPSELECT = 'group-select',
  NUMBER = 'number',
  CHECKBOX = 'checkbox',
}

export type FormItemTypes =
  | FormInputType.INPUT
  | FormInputType.SELECT
  | FormInputType.APPSELECT
  | FormInputType.GROUPSELECT
  | FormInputType.NUMBER
  | FormInputType.CHECKBOX
