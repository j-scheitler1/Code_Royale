import React from 'react';

const Design: React.FC = () => {
  return (
    <div className="text-brand text-center font-mono whitespace-pre mt-10 text-xl sm:text-base select-none">
      <div className="inline-block transition duration-300 hover:scale-125 hover:font-bold">
        <pre>
{String.raw`
       .     '     ,
       ___________
       /_|_________|_\
       '. \   / .'
       '.\ /.'
       __|| " ||__
      |~|~|~|~|~|~|~|
      | | | | | | | |
      |_|_|_|_|_|_|_|
      (o_o_o_o_o_o_o_o)
       /^^^^^^^^^^^^^^^^^\ 
      /___________________\
      |_____________________|
`}
        </pre>
      </div>
    </div>
  );
};

export default Design;
