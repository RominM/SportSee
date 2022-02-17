import React, { useEffect, useState } from 'react';
// import { getUser } from '../services/service';

/* ACCESS TO DATA */
// Access to mocked data in the file "src/services/data.js"
import { getMainData } from '../services/JF/service.mock';

// Access to "real" data in the backend API
// import { getMainData } from '../services/JF/service';

// Access to a part of data, mocked or not
import Formatter from './../services/JF/formatter';

// Picture for a fake sentence, which can be replaced by a real text component now in comment
// import texte from '../images/TestText.png';

const Hello = (props) => {
  const [userInfos, setUserInfos] = useState({});

  // Use of "AbortController()" to prevent memory leaks
  useEffect(() => {
    let abortController = new AbortController();
    async function init() {
      const mainData = await getMainData(props.id);
      const formatter = new Formatter(mainData);
      setUserInfos(formatter.getUserInfos());
    }
    init();
    return () => {
      abortController.abort();
    };
  }, [props.id]);

  return (
    <div className="hello">
      <h2 className="h2">
        Bonjour <span>{userInfos.firstName}</span>
      </h2>
      <p className="congrat">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Hello;
