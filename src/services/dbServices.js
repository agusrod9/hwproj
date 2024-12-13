import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const myHotWheelsApi = createApi({
    reducerPath: "dbApi",
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.DB_URL}`}),
    endpoints: (builder)=>({
        getCars: builder.query({
            query: ()=> `allCars.json`, 
            transformResponse: (res) => {
                const transformedResponse = Object.values(res)
                return transformedResponse
            }
        }),
        getCollectedCarsByUser: builder.query({
            query: (user) => `usrCollectedCars.json?orderBy="user"&equalTo="${user}"`,
            transformResponse: (res)=>{
                const transformedResponse = Object.values(res)
                return transformedResponse
            }
        }),
        getWishedCarsByUser: builder.query({
            query: (user) => `usrWishedCars.json?orderBy="user"&equalTo="${user}"`,
            transformResponse: (res) => {
                const transformedResponse = Object.values(res)
                return transformedResponse
            }
        }),
        postNewCollectedCar: builder.mutation({
            query: ({...car})=>({
                url:'usrCollectedCars.json',
                method:'POST',
                body: car
            })
        }),
        postNewWishedCar: builder.mutation({
            query: ({...car})=>({
                url:'usrWishedCars.json',
                method:'POST',
                body: car
            })
        })
        
    })
})

export const{   useGetCarsQuery,
                useGetCollectedCarsByUserQuery,
                useGetWishedCarsByUserQuery,
                usePostNewCollectedCarMutation,
                usePostNewWishedCarMutation
            } = myHotWheelsApi;
