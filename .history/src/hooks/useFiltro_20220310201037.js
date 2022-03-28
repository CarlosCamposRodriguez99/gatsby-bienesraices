import { React, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'

const useFiltro = () => {

  const FiltroUI = () => (
    <form>
      <select>
        <option value="">--Seleccione--</option>
      </select>
    </form>
  )

  return {
    FiltroUI
  }

}

export default useFiltro;