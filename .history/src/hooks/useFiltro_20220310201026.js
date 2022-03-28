import { React, useState } from 'react';
import { useSta}

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