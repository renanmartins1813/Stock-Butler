import { useState } from 'react';

import Firstload from '../../ui-components/Firstload';
import Appshell from '../../ui-components/Appshell';
import Container from '../../ui-components/Container';

export default function Home() {
    const [loading, setLoading] = useState(false);
  
    return (
      <div>
        {loading ? <Firstload /> : ""}
        <Appshell>
          <Container title={'Stock List'} icon='bi bi-activity'>
            
          </Container>
        </Appshell>
      </div>
    );
}
