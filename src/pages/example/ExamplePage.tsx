import React from 'react';

import Example from "@/modules/example/Example"

const ExamplePage = () => {
  const text = 'some text'

  return (
    <>
      <h1>{text}</h1>
      <Example />
    </>
  )
}

export default ExamplePage