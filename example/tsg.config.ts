// import { Options } from 'prettier'

import { IProject, fetchRequester, axiosRequester } from 'ts-gear'

const projects: IProject[] = [
  {
    name: 'pet',
    dest: './service',
    source: 'fixture/pet.json',
    requester: fetchRequester(),
    // source: 'http://petstore.swagger.io/v2/swagger.json',
  },
  {
    name: 'projectE',
    dest: './service',
    source: 'fixture/projectE.json',
    keepGeneric: true,
    requester: axiosRequester(),
  },
  // {
  //   name: 'ignore',
  //   dest: './service',
  //   source: 'fixture/ignore.json',
  //   keepGeneric: true,
  //   preferInterface: true,
  //   requester: fetchRequester(),
  // },
  // {
  //   name: 'projectPont',
  //   source: 'fixture/pontFixture.json',
  //   dest: './service',
  //   keepGeneric: true,
  //   translationEngine: 'baidu',
  //   requester: axiosRequester(),
  // },
]

export default projects
