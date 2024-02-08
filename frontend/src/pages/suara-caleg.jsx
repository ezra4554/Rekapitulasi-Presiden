import { Helmet } from 'react-helmet-async';

import { SuaraCalegView } from 'src/sections/suara_caleg/view';

// ----------------------------------------------------------------------

export default function SuaraCalegPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Rekapitulasi Calon Presiden UI </title>
      </Helmet>

      <SuaraCalegView />
    </>
  );
}
