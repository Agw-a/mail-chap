import React, { lazy, Suspense } from 'react'
import {ErrorBoundary, Error} from 'react-error-boundary'
import LoadingStatus from '../components/LoadingStatus'
// import RenderFetchResult from '../components/fetchData';


// setting up lazy load for user component

const LazyData = lazy(() => import('../components/fetchData'))
const Users = () => {
  return (
    <section>
      <ErrorBoundary fallback={<Error style={{color:'red'}}>Could not fetch data</Error>}>
      <Suspense fallback={<div>{<LoadingStatus/>}</div>}>
        <LazyData/>
      </Suspense>
      </ErrorBoundary>
      
      
      
    </section>
  )
}

export default Users;
