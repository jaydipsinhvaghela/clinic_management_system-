import React from 'react'
import { Link } from 'react-router-dom'
export default function Forgatepass() {
  return (
    <div>
      <div class='banner'>
      <div class="Auth-form-container">
      <form class="Auth-form">
        <div class="Auth-form-content">
          <h3 class="Auth-form-title">Forgate Password </h3>
         
          <div class="form-group mt-3">
            <label>Mobile Number</label>
            <input
              type="email"
              class="form-control mt-1"
              placeholder="Enter Mobile_no" />
          </div>
          {/* <div class="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              class="form-control mt-1"
              placeholder="Enter password"/>
          </div> */}
          <div class="d-grid gap-2 mt-3">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}
