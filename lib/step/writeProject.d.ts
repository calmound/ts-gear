import type { IProject } from '../interface';
/** gather global typescript content
 * write to project dir */
export declare const writeProject: (project: IProject, tsGearConfigPath: string) => void;