import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      // <div>
      //   <img src={loading} alt="loading" />
      // </div>
      <>
      <div className='text-center'>
      <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
      </div>
      </>
    )
  }
}

export default Spinner
