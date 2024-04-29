import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InvoiceTable from './InvoiceTable'

const PaymentInfo = styled.td`
  width: 38%;
  font-size: 0.75em;
  line-height: 1.5;
`

const Total = styled.td`
  color: #fb7578;
`

const Large = styled.span`
  font-size: 1.75em;
`

const Totals = ({
  // accountNumber,
  // routingNumber,
  // dueDate,
  status,
  tax,
  total,
}) => (
  <InvoiceTable
    hasBottomBorder
    headings={(
      <>
        <th>Payment Info</th>
        <th>tax and changes</th>
        <th>Total Amount</th>
      </>
    )}
  >
    <tr>
      <PaymentInfo>
      <div className='text-[12px]'>
        status:  <strong className='capitalize'>{status}</strong>
        </div>
        <div>
          {/* Routing No: <strong>{routingNumber}</strong> */}
        </div>
      </PaymentInfo>
      <td><strong>{tax}</strong> </td>
      <Total>
        <Large>
          <strong className='text-[#000]'>{total}</strong>
        </Large>
      </Total>
    </tr>
  </InvoiceTable>
)

Totals.propTypes = {
  // accountNumber: PropTypes.string.isRequired,
  // routingNumber: PropTypes.string.isRequired,
  // dueDate: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
}

export default Totals
