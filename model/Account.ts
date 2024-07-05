// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { field, text } from '@nozbe/watermelondb/decorators'

export default class Account extends Model {
  static table = 'accounts';

  @text('title') name: string;
  @field('cap') cap: number;
  @field('tab') tap: number;
}