(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{325:function(n,e,t){var o=t(326);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(328)(o,i);o.locals&&(n.exports=o.locals)},326:function(n,e,t){(n.exports=t(327)(!1)).push([n.i,"article,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden] {\n  display: none;\n}\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\na:focus {\n  outline: thin dotted;\n}\na:active,\na:hover {\n  outline: 0;\n}\nh1 {\n  font-size: 2em;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: 700;\n}\ndfn {\n  font-style: italic;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  font-size: 1em;\n}\npre {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\nq {\n  quotes: 2 1C 2 1D 2 18 2 19;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n}\nbutton,\ninput {\n  line-height: normal;\n}\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\ninput[disabled] {\n  cursor: default;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=search] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbody,\nfigure {\n  margin: 0;\n}\nlegend,\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n* {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n}\nhtml {\n  font-size: 10px;\n  font-family: sans-serif;\n}\np {\n  font-size: 1.6rem;\n  line-height: 1.5;\n}\nh1 {\n  font-family: billabong, 'billabongregular';\n  text-align: center;\n  font-weight: 100;\n  font-size: 13rem;\n  margin: 2rem 0;\n  letter-spacing: -1px;\n  text-shadow: 0px 4px 0 rgba(18,86,136,0.11);\n}\nh1 a {\n  color: #125688;\n  text-decoration: none;\n}\nh1 a:focus {\n  outline: 0;\n}\n@font-face {\n  font-family: 'billabongregular';\n  src: url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot\");\n  src: url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix\") format('embedded-opentype'), url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff\") format('woff'), url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf\") format('truetype'), url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular\") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.likes-heart {\n  opacity: 0;\n  transition: all 0.5s;\n  -webkit-transform: translateX(-50%) translateY(-50%) scale(5);\n          transform: translateX(-50%) translateY(-50%) scale(5);\n  display: block;\n}\n.likes-heart.like-enter {\n  transition: all 0.2s;\n  -webkit-transform: translateX(-50%) translateY(-50%) scale(1);\n          transform: translateX(-50%) translateY(-50%) scale(1);\n  opacity: 1;\n}\n.likes-heart.like-enter.like-enter-active {\n  -webkit-transform: translateX(-50%) translateY(-50%) scale(5);\n          transform: translateX(-50%) translateY(-50%) scale(5);\n}\n.likes-heart .like-leave-active {\n  display: none;\n}\nbody {\n  background: #fafafa;\n}\n.photo-grid {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.grid-figure,\n.single-photo {\n  flex-basis: calc(33.333% - 4rem);\n  flex-grow: 1;\n  flex-shrink: 0;\n  margin: 0 2rem 2rem 2rem;\n  padding: 2rem;\n  border: 1px solid #edeeed;\n  background: #fff;\n  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);\n  position: relative;\n}\n.single-photo {\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  background: #fff;\n}\n.single-photo .grid-figure {\n  box-shadow: none;\n  margin: 0 2rem 0 0;\n  border: 0;\n  padding: 0;\n  flex: 1 0 60%;\n  max-width: 60%;\n}\n.single-photo .comments {\n  flex: 1 0 40%;\n  max-width: 40%;\n}\n.single-photo .grid-photo {\n  width: 100%;\n  margin: 0;\n}\n.grid-photo {\n  width: calc(100% + 4rem);\n  margin-left: -2rem;\n  margin-top: -2rem;\n  max-width: none;\n}\n.remove-comment {\n  background: none;\n  border: 0;\n  line-height: 1;\n  opacity: 0;\n}\n.remove-comment:hover {\n  color: #f00;\n}\n.comment {\n  border-bottom: 1px solid #edeeed;\n  padding: 0.5rem 0;\n}\n.comment p {\n  font-size: 1.2rem;\n  margin: 0;\n}\n.comment strong {\n  color: #125688;\n  margin-right: 5px;\n}\n.comment:hover .remove-comment {\n  opacity: 1;\n}\n.comment-form input,\n.comment-form textarea {\n  width: 100%;\n  border: 0;\n  font-size: 1.3rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid #edeeed;\n  outline: none;\n  resize: vertical;\n}\n.grid-photo-wrap {\n  position: relative;\n}\n.likes-heart {\n  background: url(\"http://f.cl.ly/items/3Y373q2Q3J3Y1j203n0m/Bitmap-3.png\") center no-repeat;\n  background-size: contain;\n  font-size: 2rem;\n  padding: 1rem;\n  position: absolute;\n  color: #125688;\n  left: 50%;\n  top: 50%;\n  pointer-events: none;\n}\n/*  \n  Buttons  \n*/\n.control-buttons {\n  display: flex;\n  justify-content: space-between;\n}\nbutton,\n.button {\n  border: 2px solid #f2f2f2;\n  background: none;\n  flex-basis: 48%;\n  display: inline-block;\n  line-height: 2;\n  text-decoration: none;\n  padding: 5px;\n  text-align: center;\n  font-size: 15px;\n  color: #125688;\n  transition: all 0.2s;\n  box-sizing: padding-box;\n}\nbutton:hover,\n.button:hover,\nbutton:focus,\n.button:focus {\n  border-color: #125688;\n  outline: 0;\n}\n/*\n  Cowboy style speech bubble - you should probably use an SVG for this if you are doing more icons.\n*/\n.speech-bubble {\n  width: 1.5rem;\n  height: 1.25rem;\n  background: #125688;\n  display: inline-block;\n  border-radius: 50%;\n  position: relative;\n}\n.speech-bubble:after {\n  display: inline-block;\n  position: absolute;\n  content: '';\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 1.25rem 1.25rem 0;\n  border-color: transparent #125688 transparent transparent;\n  top: 30%;\n  left: 0;\n}\n",""])}}]);