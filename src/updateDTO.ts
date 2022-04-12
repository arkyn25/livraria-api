// import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { Livro } from './livro.model';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateCatDto extends PartialType(Livro) {}
