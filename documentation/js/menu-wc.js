'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-5278bcc7800b5a52f7aa8c49c75464e3b28c1d581372ee6d948f46974882e3156834271f7da745ceeb624852251d9951de328813e87b699b1b5485ec6b614313"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5278bcc7800b5a52f7aa8c49c75464e3b28c1d581372ee6d948f46974882e3156834271f7da745ceeb624852251d9951de328813e87b699b1b5485ec6b614313"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5278bcc7800b5a52f7aa8c49c75464e3b28c1d581372ee6d948f46974882e3156834271f7da745ceeb624852251d9951de328813e87b699b1b5485ec6b614313"' :
                                            'id="xs-controllers-links-module-AppModule-5278bcc7800b5a52f7aa8c49c75464e3b28c1d581372ee6d948f46974882e3156834271f7da745ceeb624852251d9951de328813e87b699b1b5485ec6b614313"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5278bcc7800b5a52f7aa8c49c75464e3b28c1d581372ee6d948f46974882e3156834271f7da745ceeb624852251d9951de328813e87b699b1b5485ec6b614313"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5278bcc7800b5a52f7aa8c49c75464e3b28c1d581372ee6d948f46974882e3156834271f7da745ceeb624852251d9951de328813e87b699b1b5485ec6b614313"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5278bcc7800b5a52f7aa8c49c75464e3b28c1d581372ee6d948f46974882e3156834271f7da745ceeb624852251d9951de328813e87b699b1b5485ec6b614313"' :
                                        'id="xs-injectables-links-module-AppModule-5278bcc7800b5a52f7aa8c49c75464e3b28c1d581372ee6d948f46974882e3156834271f7da745ceeb624852251d9951de328813e87b699b1b5485ec6b614313"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' :
                                            'id="xs-controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' :
                                        'id="xs-injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' :
                                            'id="xs-controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' :
                                        'id="xs-injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-108b8e375d16a4add2838972cbb8be01ab3a91b4568679709b0b40477c4559e56814f6790ddaf086b03929b66642f2fd4efcab84a42ebfb2d92d80fd3b445d53"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-108b8e375d16a4add2838972cbb8be01ab3a91b4568679709b0b40477c4559e56814f6790ddaf086b03929b66642f2fd4efcab84a42ebfb2d92d80fd3b445d53"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-108b8e375d16a4add2838972cbb8be01ab3a91b4568679709b0b40477c4559e56814f6790ddaf086b03929b66642f2fd4efcab84a42ebfb2d92d80fd3b445d53"' :
                                            'id="xs-controllers-links-module-UsersModule-108b8e375d16a4add2838972cbb8be01ab3a91b4568679709b0b40477c4559e56814f6790ddaf086b03929b66642f2fd4efcab84a42ebfb2d92d80fd3b445d53"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-108b8e375d16a4add2838972cbb8be01ab3a91b4568679709b0b40477c4559e56814f6790ddaf086b03929b66642f2fd4efcab84a42ebfb2d92d80fd3b445d53"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-108b8e375d16a4add2838972cbb8be01ab3a91b4568679709b0b40477c4559e56814f6790ddaf086b03929b66642f2fd4efcab84a42ebfb2d92d80fd3b445d53"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-108b8e375d16a4add2838972cbb8be01ab3a91b4568679709b0b40477c4559e56814f6790ddaf086b03929b66642f2fd4efcab84a42ebfb2d92d80fd3b445d53"' :
                                        'id="xs-injectables-links-module-UsersModule-108b8e375d16a4add2838972cbb8be01ab3a91b4568679709b0b40477c4559e56814f6790ddaf086b03929b66642f2fd4efcab84a42ebfb2d92d80fd3b445d53"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamsDto.html" data-type="entity-link" >GetUserParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});