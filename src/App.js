import * as React from 'react'
import {useState} from 'react'
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom'
import Expenses from './routes/expenses'
import Invoices from './routes/invoices'
import Invoice from './routes/invoice'
import {deleteOneInvoice, getOneInvoice, initialInvoices, InvoiceContext} from './services/invoiceService'

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
  const [invoices, setInvoices] = useState(initialInvoices)
  const getInvoices = () => invoices
  const getInvoice = (number) => getOneInvoice(invoices, number)
  const deleteInvoice = (number) => setInvoices(deleteOneInvoice(invoices, number))

  const invoiceWrapper = { getInvoices, setInvoices, getInvoice, deleteInvoice }

  return (
    <BrowserRouter>
      <InvoiceContext.Provider value={invoiceWrapper}>
        <Routes>
          <Route path="/" element={<Nav/>}>
            <Route path="expenses" element={<Expenses/>}/>
            <Route path="invoices" element={<Invoices/>}>
              <Route
                index
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route path=":invoiceId" element={<Invoice/>}/>
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
      </InvoiceContext.Provider>
    </BrowserRouter>
  )
}
