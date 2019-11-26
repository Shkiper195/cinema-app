import React, {Component} from 'react';
import welcomeImg from '../../images/welcome-img.jpg';

export default class Welcome extends Component {
    render() {
        return(
            <div className="welcome">
                <div className="border-right">
                    <div className="border-left">
                        <div className="welcome-info">
                            <h3>Welcome to <b>Cinema</b> <span>World</span></h3>
                            <p>
                                Cinema World opened on may 28, 2010. It is the ninth cinema of 
                                the Cinema World network. Eight comfortable halls with a total 
                                capacity of 1058 seats are waiting for spectators.
                            </p>
                            <div className="welcome-img"><img src={welcomeImg} alt="" />The films are shown 
                                in 2D and Real 3D.
                                The repertoire of the cinema offers world hits, the best films of the 
                                Russian hire, the films awarded at the Russian and international festivals. 
                                There are a lot of family and youth cinema in the cinema poster.
                            </div>
                            <p>
                                ATTENTION! To view the sessions in RealD 3D format, you need special 
                                glasses, which you can always buy at the cinema box office at the price 
                                of 50 rubles or use your glasses.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                proident, mollit anim id est laborum.
                            </p>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                                excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
                                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum 
                                quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum 
                                soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
                                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe 
                                eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque 
                                earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus 
                                maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}