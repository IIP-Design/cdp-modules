import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from './ConfigForm.module.scss';

const sources = [
  { name: 'ShareAmerica', value: 'share.dev.america.gov' },
  { name: 'YALI', value: 'yali.dev.america.gov' },
  { name: 'YLAI', value: 'ylai.dev.america.gov' },
];

const yaliPresets = [{ name: 'default', value: 16483 }];
const ylaiPresets = [{ name: 'default', value: 3487 }];
const sharePresets = [
  { name: 'default', value: 3487 },
  { name: 'Spanish', value: 511490 },
];

const ConfigForm = ( { data, setData } ) => {
  const { id, site } = data;

  const [preset, setPreset] = useState( 'yes' );

  const updateData = ( name, value ) => {
    console.log( name, value );
    const updated = {
      ...data,
      [name]: value,
    };

    setData( updated );
  };

  const updateId = newId => {
    setData( {
      ...data,
      id: newId,
    } );
  };

  const updateSite = newId => {
    setData( {
      ...data,
      id: newId,
    } );
  };

  const updateBoth = ( newId, source ) => {
    setData( {
      ...data,
      id: newId,
      site: source,
    } );
  };

  const getDefaultId = source => {
    switch ( source ) {
      case 'ylai.dev.america.gov':
        return 3487;
      case 'yali.dev.america.gov':
        return 16483;
      default:
    }
  };

  const handleOnchange = e => {
    const { name, value } = e.target;

    if ( name === 'site' && preset === 'yes' ) {
      const newId = getDefaultId( value );

      updateBoth( site, newId );
    }
  };

  const handleToggle = e => {
    const { value } = e.target;

    // if ( value === 'yes' ) resetDefaultId( site );

    setPreset( value );
  };

  return (
    <form className={style.form}>
      <label htmlFor="site">
        { 'Select Source: ' }
        <select
          id="site"
          name="site"
          value={ site }
          onBlur={ e => handleOnchange( e ) }
          onChange={ e => handleOnchange( e ) }
        >
          { sources.map( source => <option key={ source.name } value={ source.value }>{ source.name }</option> ) }
        </select>
      </label>
      <div>
        { 'Use preset id? ' }
        <label htmlFor="preset-yes">
          <input
            checked={ preset === 'yes' }
            id="preset-yes"
            name="preset"
            type="radio"
            value="yes"
            onChange={ e => handleToggle( e ) }
          />
          { ' Yes' }
        </label>
        <label htmlFor="preset-no">
          <input
            checked={ preset === 'no' }
            id="preset-no"
            name="preset"
            type="radio"
            value="no"
            onChange={ e => handleToggle( e ) }
          />
          { ' No' }
        </label>
        { preset === 'no' && (
          <label htmlFor="id">
            { 'Manually set id: ' }
            <input
              id="id"
              name="id"
              value={ id }
              type="text"
              onBlur={ e => handleOnchange( e ) }
              onChange={ e => handleOnchange( e ) }
            />
          </label>
        ) }
      </div>
    </form>
  );
};

ConfigForm.propTypes = {
  data: PropTypes.shape( {
    id: PropTypes.number,
    site: PropTypes.string,
  } ),
  setData: PropTypes.func,
};

export default ConfigForm;
