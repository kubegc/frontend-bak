import axios from "@/api/request";
// import request from '@/api/request'
//
// export function createResource(data) {
//   return request({
//     url: '/kube/createOrUpdateResource',
//     method: 'post',
//     data
//   })
// }
//
// export function updateResource(data) {
//   return request({
//     url: '/kube/updateResource',
//     method: 'post',
//     data
//   })
// }
//
// export function deleteResource(data) {
//   return request({
//     url: '/kube/deleteResource',
//     method: 'post',
//     data
//   })
// }
//
// export function getResource(params) {
//   return request({
//     url: '/kube/getResource',
//     type: 'get',
//     params
//   })
// }
//
// export function listResources(data) {
//   return request({
//     url: '/kube/listResources',
//     method: 'post',
//     data
//   })
// }
//
// export function getScreen(params) {
//   return request({
//     url: '/echart/getScreen',
//     type: 'get',
//     params
//   })
// }
//
// export function getScheduleData(data) {
//   return request({
//     url: 'mcmf/solveBase',
//     method: 'post',
//     data
//   })
// }
// export function queryResourceValue(data) {
//   return request({
//     url: '/kube/queryResourceValue',
//     method: 'post',
//     data
//   })
// }
//
// export function queryResourceCount(data) {
//   return request({
//     url: '/kube/queryResourceCount',
//     method: 'post',
//     data
//   })
// }
//


export function getResource(params : any) {
    return axios.post( '/kubesys/kube/getResource', params)
}

export function listResources(params : any) {
    return axios.post( '/kubesys/kube/listResources', params)
}

export function updateResource(params : any){
    return axios.post( '/kubesys/kube/updateResource', params)
}

export function createResource(params: any){
    return axios.post('/kubesys/kube/createResource', params)
}

export function deleteResource(params: any){
    return axios.post('/kubesys/kube/deleteResource', params)
}
