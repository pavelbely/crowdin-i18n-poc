import otaClient from '@crowdin/ota-client';
import { BackendModule, InitOptions, Services } from 'i18next';

export class CrowdinOtaI18next implements BackendModule {
  type: 'backend' = 'backend';
  private otaClient: InstanceType<typeof otaClient>;

  constructor(hash: string) {
    console.log('CrowdinOtaI18next initialized with hash:', hash);
    this.otaClient = new otaClient(hash);
  }

  init(services: Services, backendOptions: InitOptions, i18nextOptions: InitOptions): void {
    console.log('CrowdinOtaI18next init called with options:', {
      services,
      backendOptions,
      i18nextOptions
    });
  }

  read(language: string, namespace: string, callback: (error: any, data: any) => void): void {
    console.log(`Attempting to load translations for ${language}:${namespace}`);
    
    this.otaClient
      .getStrings()
      .then((value) => {
        console.log('Received translations from Crowdin:', value);
        // You might need to transform the data to match the expected format
        const transformedData = this.transformCrowdinData(value, language, namespace);
        callback(null, transformedData);
      })
      .catch((e) => {
        console.error('Error loading translations from Crowdin:', e);
        callback(e, null);
      });
  }

  private transformCrowdinData(data: any, language: string, namespace: string): any {
    // You might need to implement this based on how Crowdin returns the data
    console.log('Transforming Crowdin data for', { language, namespace, data });
    return data;
  }

  // Optional methods
  create?(): void {
    // Create resource
  }

  save?(): void {
    // Save resource
  }
} 