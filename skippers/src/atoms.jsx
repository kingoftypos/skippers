import {atom} from 'recoil';
export const tagState=atom({
    key:"tags",
    default:[],
});
export const userState=atom({
    key:"user",
    default:"",
});
export const showState=atom({
    key:"show",
    default:false,
})