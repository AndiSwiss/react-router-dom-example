import React from 'react'

/**
 * @type {Invoice[]}
 */
let initialInvoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995"
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000"
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997"
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998"
  }
];

/**
 * @param invoices {Invoice[]}
 * @param {number} number
 * @returns {Invoice}
 */
const getOneInvoice = (invoices, number) => invoices.find(invoice => invoice.number === number)

/**
 * @param invoices {Invoice[]}
 * @param {number} number
 * @returns {Invoice[]}
 */
const deleteOneInvoice = (invoices, number) => invoices.filter(invoice => invoice.number !== number)

/**
 * Invoice context
 */
const InvoiceContext = React.createContext({
  getInvoices: () => {},
  setInvoices: () => {},
  getInvoice: () => {},
  deleteInvoice: () => {},
})


/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
 */

export {initialInvoices, InvoiceContext, getOneInvoice, deleteOneInvoice}
