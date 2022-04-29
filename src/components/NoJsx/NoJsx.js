import React from "react";

export const NoJsx = () => {
    return React.createElement('div',{id: 'no-jsx', className: 'jo-jsx-element'},React.createElement('h1',null,'Hello by Using No Jsx'))
}