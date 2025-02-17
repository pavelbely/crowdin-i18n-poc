import otaClient from '@crowdin/ota-client';
import { BackendModule, InitOptions, Services } from 'i18next';
import { LOCAL_TRANSLATIONS_FLATTENED } from './local-translations';

export class CrowdinOtaI18next implements BackendModule {
  type: 'backend' = 'backend';
  private otaClient: InstanceType<typeof otaClient>;

  constructor(hash: string) {
    this.type = 'backend';
    this.otaClient = new otaClient(hash);
  }

  init(_services: Services, _backendOptions: InitOptions, _i18nextOptions: InitOptions): void {
  }

    read(language: string, _namespace: string, callback: (error: any, data: any) => void) {
        
        this.otaClient
            .getStringsByLocale(language)
            .then((translations) => {
                const mergedData = {
                    ...LOCAL_TRANSLATIONS_FLATTENED,
                    ...translations
                };
                callback(null, mergedData);
                })
            .catch(() => callback(null, LOCAL_TRANSLATIONS_FLATTENED));
            
        
    }

  // Optional methods
  create?(): void {
    // Create resource
  }

  save?(): void {
    // Save resource
  }
} 