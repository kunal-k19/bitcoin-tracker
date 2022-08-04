import React from 'react';

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className='container'>
      
      <div className='row'>
    
          <div className='coin'>
            
              <img src={image} alt='crypto'/>
              <h1>{name}</h1>
              <p className='symbol'>{symbol}</p>
          </div>
          <div className='data'>
            <p className='price'>{price}</p>
            <p className='volume'>{volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className='red'>{priceChange}%</p>
            ) : (
              <p className='green'>{priceChange}%</p>
            )}
            <p className='marketcap'>
              INR {marketcap.toLocaleString()}
            </p>
          </div>
      </div>
    </div>
  );
}

export default Coin;
