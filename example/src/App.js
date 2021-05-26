import React, { useState } from 'react';

import { Dialog } from 'react-dialog-tis';
import 'react-dialog-tis/dist/index.css';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='App'>
      <div className='Title'>
        Dialog Tis
      </div>
      <button className='Button' onClick={() => setOpen(true)}>
        Open Dialog
      </button>
      <Dialog
        className='Dialog'
        title='GitHub'
        open={open}
        onClose={() => setOpen(false)}
        buttons={[
          {
            text: 'OK',
            onClick: () => setOpen(false)
          }
        ]}
        darkMode={false}
      >
        <p>
          GitHub is a website and service that we hear geeks rave about all the time, yet a lot of people don’t really understand what it does.<br />
          Want to know what all the GitHub hubbub is about? Read on to find out.
          To understand GitHub, you must first have an understanding <br/> 
          of Git. Git is an open-source version control system that was started by Linus Torvalds—the same person who created Linux. Git is <br/>
          similar to other version control systems—Subversion, CVS, and Mercurial to name a few.

          So, Git is a version control system, but what<br/>
          does that mean? When developers create something (an app, for example), they make constant changes to the code, releasing new<br/>
          versions up to and after the first official (non-beta) release.

          Version control systems keep these revisions straight, storing the<br/>
          modifications in a central repository. This allows developers to easily collaborate, as they can download a new version of the software,<br/>
          make changes, and upload the newest revision. Every developer can see these new changes, download them, and contribute.

          Similarly,<br/>
          people who have nothing to do with the development of a project can still download the files and use them. Most Linux users should<br/>be familiar with this process, as using Git, Subversion, or some other similar method is pretty common for downloading needed<br/>
          files—especially in preparation for compiling a program from source code (a rather common practice for Linux geeks).


          Git is the<br/>
          preferred version control system of most developers, since it has multiple advantages over the other systems available. It stores file<br/>
          changes more efficiently and ensures file integrity better. If you’re interested in knowing the details, the Git Basics page has a thorough<br/>
          explanation on how Git works.
        </p>
      </Dialog>
    </div>
  );
};

export default App;