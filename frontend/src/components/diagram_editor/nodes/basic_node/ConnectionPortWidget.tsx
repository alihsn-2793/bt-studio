import React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

export const SpecialPortWidget = ({ engine, port }: { engine:any, port:any }) => {

    // Different margins depending on the type (and thus the placing of the port)
    const getPortPlacement = () => {

        if (port.options.type === 'children port') {
            return {
                marginTop: '5px',
                marginLeft: '6px',
                marginRight: '-4px'
            };
        } else {
            return {
                marginTop: '5px',
                marginLeft: '-4px',
                marginRight: '5px'
            };
        }
    };

    // Styles of the port itself
    const portStyle = {
        width: "10px", 
        height: "10px", 
        borderRadius: "50%",
        background: "black"
    }

    const portPlacement = getPortPlacement();

    return (
        <PortWidget port={port} engine={engine} style={portPlacement}>
            <div style={portStyle} />
        </PortWidget>
    );
};