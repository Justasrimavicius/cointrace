import React, { useContext, useEffect, useState } from 'react'

import { Button, Typography } from "@mui/material";
import { Table, TableHead, TableRow, TableCell } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { UserContext } from '../AuthComponents/UserContext';

function Home(props){

    const UID = useContext(UserContext);


    
    return(
        <React.Fragment>
            <div className='home'>
                <div className="middle">
                <div className="middle-balance">
                    <Typography variant="h6">Your balance</Typography>
                    <Typography variant="h3" className="middle-balance-number" >00.00$<ArrowForwardIosIcon style={{marginBottom:'4px'}}/></Typography>
                    
                </div>
                <div className="middle-coins">
                    <div className="middle-coins-top">
                    <Typography variant="h6" style={{marginLeft: '5px'}}>Popular coins</Typography>
                    <ShoppingCartCheckoutIcon style={{margin: '5px'}} className='middle-coins-top-icon' onClick={()=>{props.loadFromSidePanel.loadSidePanelTab('trade')}}/>
                    </div>
                    <div className="middle-coins-bottom">
                        <Table height='100%'>
                            <TableHead>

                                <TableRow>
                                    <TableCell align="center">
                                        <img src={require('../../Images/ProfileImages/btc.png')} width='30px'></img>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography>$21,341.00</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography color={'red'}>2.33%</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        $2.77B
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="text">Buy</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                <TableCell align="center">
                                        <img src={require('../../Images/ProfileImages/eth.png')} width='30px'></img>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography>$341.00</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color={'green'}>21.33%</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        $2.77B
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="text">Buy</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                <TableCell align="center">
                                        <img src={require('../../Images/ProfileImages/bnb.png')} width='30px'></img>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography>$341.00</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color={'green'}>21.33%</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        $2.77B
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="text">Buy</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                <TableCell align="center">
                                        <img src={require('../../Images/ProfileImages/ada.png')} width='30px'></img>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography>$341.00</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color={'green'}>21.33%</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        $2.77B
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="text">Buy</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                <TableCell align="center">
                                        <img src={require('../../Images/ProfileImages/dot.png')} width='30px'></img>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography>$341.00</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color={'green'}>21.33%</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        $2.77B
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="text">Buy</Button>
                                    </TableCell>
                                </TableRow>

                            </TableHead>
                        </Table>
                    </div>
                </div>
                </div>
                <div className="right-side">
                <div className="right-side-upper">
                    <Button variant="text" align="center" fullWidth onClick={()=>{window.open('https://cryptoliteracy.org/quiz/')}}>Check your crypto knowledge!</Button>
                </div>
                <div className="right-side-lower">
                    <div className="nft">
                        <Typography variant="subtitle1" style={{alignSelf:'center', margin:'10px'}}>What are NFTs and where did they come from?</Typography>
                        <img src={require('../../Images/nft.png')} width='140px' style={{alignSelf:'center'}} onClick={()=>{window.open('https://www.investopedia.com/non-fungible-tokens-nft-5115211')}}></img>
                    </div>
                    <div className="staking">
                        <img src={require('../../Images/staking.png')} width='140px' style={{alignSelf:'center'}} onClick={()=>{window.open('https://www.coindesk.com/learn/crypto-staking-101-what-is-staking/')}}></img>
                        <Typography variant="subtitle1" style={{alignSelf:'center', margin:'10px'}}>What is staking and why is it so amazing?</Typography>
                    </div>
                    <div className="blockchain">
                        <Typography variant="subtitle1" style={{alignSelf:'center', margin:'10px'}}>How the allmighty blockchain works</Typography>
                        <img src={require('../../Images/blockchain.png')} width='140px' style={{alignSelf:'center'}} onClick={()=>{window.open('https://www.investopedia.com/terms/b/blockchain.asp')}}></img>
                    </div>
                </div>
                </div>
                <div className="footer">
                <span>@2022 <a href="https://github.com/Justasrimavicius/" style={{textDecoration:'none'}}>https://github.com/Justasrimavicius/</a></span>
                <Button variant="text" color="secondary">Click me for a surprise</Button>
                {/* Do something with the upper button. maybe api for animal gifs? */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;