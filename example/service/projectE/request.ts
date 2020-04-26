/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import projects from '../../tsg.config'

import { ReplyVO, Int } from './definition'

import { PropertyType } from 'ts-gear'

const project = projects.find((p) => p.name === 'projectE')!
const { requester } = project
/** request parameter type for deleteApiDataboardBoardEs */
export interface IDeleteApiDataboardBoardEsOption {
  /** 索引数组 */
  body?: Array<string>
}

export interface IDeleteApiDataboardBoardEsResponse {
  /** OK */
  200: ReplyVO<Int>
  /** No Content */
  204: any
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
}

export type IDeleteApiDataboardBoardEsResponseSuccess = PropertyType<IDeleteApiDataboardBoardEsResponse, 200>
/**
 * 删除索引
 * tags: Es
 * produces: *／*
 */
export function deleteApiDataboardBoardEs(
  option: IDeleteApiDataboardBoardEsOption,
): Promise<IDeleteApiDataboardBoardEsResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(deleteApiDataboardBoardEs.mockData as any)
  }
  return requester('/api/databoard/board/es', {
    method: 'delete',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  deleteApiDataboardBoardEs.mockData = '' as any
}
