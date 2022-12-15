import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import {InvoiceContext} from '../services/invoiceService'

export default function Invoice() {
  const { getInvoice, deleteInvoice } = useContext(InvoiceContext)
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices');
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
