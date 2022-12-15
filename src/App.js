import * as React from 'react';
import {Outlet, Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import Expenses from './routes/expenses'
import Invoices from './routes/invoices'
import Invoice from './routes/invoice'
import {useState} from 'react'

function Nav() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  )
}
export default function App() {
  // Test, whether this App keeps the state => works
  const [data, setData] = useState(1)

  return (
    <BrowserRouter>
      <div>{data}</div>
      <button onClick={() => setData(data + 1)}>incr</button>
      <hr/>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
