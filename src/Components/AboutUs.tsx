import { Opacity } from "@mui/icons-material";
import * as React from 'react';
import { Box, Button, Card, TextField } from "@mui/material";


export default function About() {
    return (

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',


        }}>
            <Card sx={{ height: 600,minWidth: '1400px', backgroundColor: '#FFFFFF', borderRadius: '25px', alignItems: 'center'}}>
            <div style={{ height: 650, paddingRight: '20px', borderRadius: '30px', maxWidth: '800px'}}>
                <div className="picture1">
            <img src={'/Images/aboutus.png'} alt="picture1" width={500} height={500} style={{float: "left", paddingLeft: '900px', position: "absolute"}}/>
            </div>
                    <div style={{ padding: '50px', fontSize: '30px', marginLeft: '5rem'}}>This system involves sales and inventory system combine to solve the problem of the separate function of business management.
In this way the cost of managing the business will be cut and lessen the workforce put on management. This system meets the basics of business management
and understands the fundamental function of business through an easy and manageable way of
checking the inventory with sales.</div>
            </div>
            </Card>
        </div>
            );
    }
    