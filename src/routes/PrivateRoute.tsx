import React from 'react';
import Redirect from 'umi/redirect';

export default function(props: any) {
  return <>{localStorage.getItem('token') ? props.children : <Redirect to="/login" />}</>;
}
