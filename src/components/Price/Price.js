import React from 'react'
import styles from './style.module.css'
import styled from 'styled-components'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

const Price = () => {
    return (
        <div className={styles.container}>
            <div className={styles.serviceWrapper}>
                <PricingTable highlightColor='#077BF1'>
                    <PricingSlot title='A' priceText='100kn'>
                        <PricingDetail> <b>a</b> a</PricingDetail>
                        <PricingDetail> <b>a</b> a</PricingDetail>
                        <PricingDetail> <b>a</b> a</PricingDetail>
                    </PricingSlot>
                    <PricingSlot highlighted title='B' priceText='200kn'>
                        <PricingDetail> <b>b</b> b</PricingDetail>
                        <PricingDetail> <b>b</b> b</PricingDetail>
                        <PricingDetail> <b>b</b> b</PricingDetail>
                    </PricingSlot>
                    <PricingSlot title='C' priceText='300kn'>
                        <PricingDetail> <b>c</b> c</PricingDetail>
                        <PricingDetail> <b>c</b> c</PricingDetail>
                        <PricingDetail> <b>c</b> c</PricingDetail>
                    </PricingSlot>
                    <PricingSlotStyled  title='D' priceText='400kn'>
                        <PricingDetail> <b>d</b> d</PricingDetail>
                        <PricingDetail> <b>d</b> d</PricingDetail>
                        <PricingDetail> <b>d</b> d</PricingDetail>
                    </PricingSlotStyled>
                </PricingTable>
            </div>
        </div>
    )
}

export default Price

const PricingSlotStyled = styled(PricingSlot)`
    width: 100px;
`